import React, { Component } from 'react';
import ChapterItem from './ChapterItem';
import VerseItem from './VerseItem';
import Pagination from './Pagination';
import { chapters as chapterData} from '../data/constants';
const API = "http://staging.quran.com:3000/api/v3/chapters/";

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'সমস্ত সূরা সমূহ',
            chapters: true,
            data: chapterData,
            currentPage: 1,
            totalPages: 1,
            currentChapter: 0,
            isLoading: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, page = this.state.currentPage) {
        const Query = `${id}/verses?recitation=1&text_type=words&translations=24&page=${page}`;

        this.setState({ isLoading: true }, () => {
            fetch(API + Query)
              .then(response => response.json())
              .then(data => this.setState({
                  title: `${chapterData[id-1].name_arabic} : ${chapterData[id-1].name_bangla}`,
                  chapters: false,
                  data: data.verses,
                  currentPage: data.meta.current_page,
                  totalPages: data.meta.total_pages,
                  currentChapter: id,
                  isLoading: false
              }));
          });
    }

    render() {
        return (
            <div>
                <h6 className="content-title border-bottom border-gray pb-2 mb-0">{this.state.title}</h6>

                <div>
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
