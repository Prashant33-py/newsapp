import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: "flex", justifyContent: "flex-end", position:"absolute", right:0, top: -10}}>
                        <span className="badge rounded-pill bg-success">
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://www.nccpimandtip.gov.eg/uploads/newsImages/1549208279-default-news.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
