import React, { useEffect, useState } from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';

function RowPost({ title, url, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
      });
  }, [url]);

  const opt = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        }
      })
      .catch(err => {
        console.error("Error fetching video:", err);
      });
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div key={obj.id}>
            <img
              onClick={() => handleMovie(obj.id)}
              className={isSmall ? 'smallPoster' : 'poster'}
              alt='poster'
              src={`${imageUrl + obj.backdrop_path}`}
            />
            <h5>{obj.name}</h5>
          </div>
        ))}
      </div>
      {urlId && <Youtube opts={opt} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
