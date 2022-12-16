import React, { useState } from "react";

import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import PlayerAutoComplete from "./PlayerAutoComplete";
import "../styles/MainArea.css";
import { useDispatch, useSelector } from "react-redux";

// actions
import { saveAutoCompleteOptionsAction } from "../state/actions/autoComplete.actions";
import {addNewGuessAction} from "../state/actions/guess.actions";

// services
import { getAutoCompleteOptions } from "../service/autoComplete.services";

const MainArea = () => {
  const [guessItem, setGuessItem] = useState({});
  const dispatch = useDispatch();

  const autoCompleteOptions = useSelector(
    (state) => state.autoComplete.autoCompleteValues
  );
  const onGuessTextChange = (e) => {
    if (e.target.value) {
      getAutoCompleteOptions(e.target.value)
        .then((response) => {
          console.log(response.data);
          const players = response.data.map((player) => ({
            value: player.name,
            team: player.team.logo,
            position: player.position,
            nationality: player.nationality,
          }));

          dispatch(saveAutoCompleteOptionsAction(players));
        })
        .catch((e) => {
          dispatch(saveAutoCompleteOptionsAction([]));
        });
    } else {
      dispatch(saveAutoCompleteOptionsAction([]));
    }
  };

  const onGuessSelect = (item) =>{
    setGuessItem({ ...item });
    dispatch(addNewGuessAction(1));
  }

  return (
    <div className="main__area__container">
      <div>{guessItem.value}</div>
      <DatalistInput
        className="main__area__input"
        placeholder="Chocolate"
        onChange={onGuessTextChange}
        onSelect={onGuessSelect}
        items={autoCompleteOptions.map((autoCompleteItem) => ({
          ...autoCompleteItem,
          node: <PlayerAutoComplete {...autoCompleteItem} />,
        }))}
      />
    </div>
  );
};

export default MainArea;
