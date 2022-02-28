import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country:"in",
        category:"general"
    }
    static propTypes = {
        country:PropTypes.string,
        category:PropTypes.string
    }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
    document.title= props.category.toUpperCase();
  }
     handlePreviousClick= async ()=>{
        this.props.setProgress(0);
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d908960bc9f544d6b71e60b263fd3d75&page=${this.state.page-1}&pageSize=15`;
        this.setState({loading:true});
        this.props.setProgress(40);
        const data = await fetch(url);
        const parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({page:this.state.page-1,articles:parsedData.articles,loading:false});
        this.props.setProgress(100);
  }
     handleNextClick = async ()=>{
        this.props.setProgress(0);
         if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d908960bc9f544d6b71e60b263fd3d75&page=${this.state.page+1}&pageSize=15`;
        this.props.setProgress(30);
        this.setState({loading:true});
        const data = await fetch(url);
        const parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({page:this.state.page+1,articles:parsedData.articles,loading:false});
        this.props.setProgress(100);
    }
  }
  async componentDidMount(){
      this.props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d908960bc9f544d6b71e60b263fd3d75&page=1&pageSize=15`;
      this.props.setProgress(40);
      this.setState({loading:true});
      const data = await fetch(url);
      const parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
      this.props.setProgress(100);
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px',marginTop:'65px'}}>NewsDuniya - Top Headlines from <label className="text-capitalize">{this.props.category}</label></h2> 
         <div className="row my-3">
         {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4"  key={element.url}>
                <NewsItem
                  imageUrl={element.urlToImage}
                  title={element.title?element.title.slice(0,45):""}
                  description={element.description?element.description.slice(0,88):""}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePreviousClick}>&laquo;Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
        <footer class="page-footer font-small blue">
            <div className="footer-copyright text-center py-3"><b>© 2022 Copyright: News Duniya</b><br/><b>By: Nishu Nishank</b>
            </div>
        </footer>
      </div>
    );
  }
}

export default News;
