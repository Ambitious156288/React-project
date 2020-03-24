import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(({ id, title, content, articleUrl, created }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
