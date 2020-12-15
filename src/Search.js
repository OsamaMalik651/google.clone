import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hidebuttons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // do something with the input
    history.push("/search");
  };
  //when you hit enter key it triggers google search button use <form> and button type to submit

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__inputIcon" />
      </div>
      {!hidebuttons ? (
        <div className="search__buttons">
          <button type="submit" onClick={search} variant="outlined">
            Google Search
          </button>
          <button variant="outlined"> I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttons">
          <button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </button>
          <button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </form>
  );
}

export default Search;
