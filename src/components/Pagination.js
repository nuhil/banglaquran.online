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
                            <a className="page-link previous-verse" href="#" aria-label="Previous" onClick={this.handlePrevPageClick}>
                              <span aria-hidden="true">&laquo;</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                      ) : ''
                  }

                    <li className="page-item disabled">
                        <a className="page-link" href="#">{`${this.props.currentPage} of ${this.props.totalPages}`}</a>
                    </li>

                    {
                        (this.props.currentPage < this.props.totalPages) ? (
                            <li className="page-item">
                              <a className="page-link next-verse" href="#" aria-label="Next"  onClick={this.handleNextPageClick}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                              </a>
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
