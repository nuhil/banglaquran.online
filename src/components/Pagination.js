import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
    }

    handlePrevPageClick() {
        this.props.handleClick(this.props.currentChapter, this.props.currentPage - 1);
    }

    handleNextPageClick() {
        this.props.handleClick(this.props.currentChapter, this.props.currentPage + 1);
    }

    render() {
        return (
            (this.props.totalPages > 1) ? (
            <div id="paginate">
              <nav aria-label="navigation">
                <ul className="pagination justify-content-center">
                  {
                      (this.props.currentPage > 1) ? (
                          <li className="page-item">
                            <button className="page-link previous-verse" aria-label="Previous" onClick={this.handlePrevPageClick}>
                              <span aria-hidden="true">&laquo;</span>
                              <span className="sr-only">Previous</span>
                            </button>
                          </li>
                      ) : ''
                  }

                    <li className="page-item disabled">
                        <button className="page-link">{`${this.props.currentPage} of ${this.props.totalPages}`}</button>
                    </li>

                    {
                        (this.props.currentPage < this.props.totalPages) ? (
                            <li className="page-item">
                              <button className="page-link next-verse" aria-label="Next"  onClick={this.handleNextPageClick}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                              </button>
                            </li>
                        ) : ''
                    }

                </ul>
              </nav>
            </div>
        ) : ''
    );
  }
}

export default Pagination;
