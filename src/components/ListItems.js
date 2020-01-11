import React, { Component } from 'react';
import ChapterItem from './ChapterItem';
import VerseItem from './VerseItem';
import Pagination from './Pagination';
import { chapters as chapterData} from '../data/constants';
import { openDatabase, showCachedMessages } from '../utils/IndexDBHelper';

const API = "http://staging.quran.com:3000/api/v3/chapters/";
const initialState = {
    title: 'সমস্ত সূরা সমূহ',
    chapters: true,
    data: chapterData,
    currentPage: 1,
    totalPages: 1,
    currentChapter: 0,
    isLoading: false,
    noOfflineData: false,
};

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleClick = this.handleClick.bind(this);
         this.dbPromise = openDatabase()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.route === 'home') {
            this.setState(initialState);
        }
    }

    handleClick(id, page = this.state.currentPage) {
       this.setState({ isLoading: true })
        const Query = `${id}/verses?recitation=1&text_type=words&translations=24&page=${page}`;
        fetch(API + Query)
        .then(response => response.json())
        .then( data => {
          data.id = id; // to set an unique id to the record
          this.dbPromise.then(function(db) {
            if (!db) return;

            var tx = db.transaction('banglaquran', 'readwrite');
            var store = tx.objectStore('banglaquran');
            store.put(data);
          });

          this.setState({
            title: `${chapterData[id-1].name_arabic} : ${chapterData[id-1].name_bangla}`,
            chapters: false,
            data: data.verses,
            currentPage: data.meta.current_page,
            totalPages: data.meta.total_pages,
            currentChapter: id,
            isLoading: false,
        });

        })
        .catch(error => {
          showCachedMessages(this.dbPromise).then( cachedData =>{
              let data = cachedData.map(data => data).filter( data=> data.id === id);
              if(data.length > 0) {
                data = data[0]; // little hack to get the item.
                this.setState({
                  title: `${chapterData[id-1].name_arabic} : ${chapterData[id-1].name_bangla}`,
                  chapters: false,
                  data: data.verses,
                  currentPage: data.meta.current_page,
                  totalPages: data.meta.total_pages,
                  currentChapter: id,
                  isLoading: false,
              });

              }else {
                console.log(data.length);
                this.setState({
                  noOfflineData: true,
                  chapters: false,
                })
              }

          })

        })
    }

    render() {
        return (
            <div>
                <h6 className="content-title border-bottom border-gray pb-2 mb-0">{this.state.title}</h6>

                <div>
                {this.state.noOfflineData && (
                  <h3>No Offline data, Connect your device with internet to store data into your device.</h3>
                )}
                    {
                      this.state.isLoading ? (
                            <div className="loading">Loading&#8230;</div>
                        ) : (
                            this.state.data.map((item, index) => this.state.chapters ? (
                                <ChapterItem
                                    key={index}
                                    index={index + 1}
                                    handleClick={this.handleClick}
                                    arabic={item.name_arabic}
                                    bangla={item.name_bangla}
                                />
                            ) : (
                                <VerseItem
                                    key={index}
                                    index={`${item.chapter_id}:${item.verse_number}`}
                                    arabic={item.text_indopak}
                                    bangla={item.translations[0].text}
                                    audio={item.audio}
                                />
                            ))
                        )
                    }
                </div>

                <Pagination
                    currentPage={this.state.currentPage}
                    totalPages={this.state.totalPages}
                    handleClick={this.handleClick}
                    currentChapter={this.state.currentChapter}
                />
            </div>
        );
    }
}

export default ListItems;
