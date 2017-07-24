var React = require('react');
var ReactDOM = ('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

    getInitialState: function () {
        console.log('[TTM] StreamTweet: 1. Running getInitialState()');

        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    },

    componentWillMount: function () {
        console.log('[TTM] StreamTweet: 2. Running componentWillMount()');

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });

        window.twittertimemachine = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },

    componentDidMount: function() {
        console.log('[TTM] StreamTweet: 3. Running componentDidMount()');

        var componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.twittertimemachine.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.twittertimemachine.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('[TTM] StreamTweet: 4. Running componentWillReceiveProps()');

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            headerText: headerText
        });

        window.twittertimemachine.numberOfReceivedTweets++;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('[TTM] StreamTweet: 5. Running shouldComponentUpdate()');

        return (nextProps.tweet.text.length > 1);
    },

    componentWillUpdate: function (nextProps, nextState) {
        console.log('[TTM] StreamTweet: 6. Running componentWillUpdate()');
    },

    componentDidUpdate: function (prevProps, prevState) {
        console.log('[TTM] StreamTweet: 7. Running componentDidUpdate()');

        window.twittertimemachine.numberOfDisplayedTweets++;
    },
    
    componentWillUnmount: function() {
        console.log('[TTM] StreamTweet: 8. Running componentWillUnmount()');
        
        delete window.twittertimemachine
    },

    render: function() {
        console.log('[TTM] StreamTweet: Running render()');

        return(
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
});

module.exports = StreamTweet;