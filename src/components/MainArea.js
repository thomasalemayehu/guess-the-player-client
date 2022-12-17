import React, { useRef } from "react";

import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import PlayerAutoComplete from "./PlayerAutoComplete";
import "../styles/MainArea.css";
import { useDispatch, useSelector } from "react-redux";
import { saveAutoCompleteOptionsAction } from "../state/actions/autoComplete.actions";
import {
  addNewGuessAction,
  clearGuessAction,
} from "../state/actions/guess.actions";
import { startNewGameSession } from "../service/guess.services";
import { newGameSessionAction } from "../state/actions/guess.actions";
import { getAutoCompleteOptions } from "../service/autoComplete.services";
import { checkGuess } from "../service/guess.services";

const MainArea = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const autoCompleteOptions = useSelector(
    (state) => state.autoComplete.autoCompleteValues
  );

  const gameId = useSelector((state) => state.guess.gameSession);

  const onGuessTextChange = (e) => {
    if (e.target.value) {
      getAutoCompleteOptions(e.target.value)
        .then((response) => {
          const players = response.data.map((player) => ({
            value: player.name,
            team: player.team.logo,
            position: player.position,
            nationality: player.nationality,
            id: player.id,
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

  const onGuessSelect = async (item) => {
    checkGuess(gameId, item.id)
      .then((response) => {
        if (response.status === 200) {
          dispatch(addNewGuessAction(response.data));

          const val =
            response.data.nationalityCheck &&
            response.data.positionCheck &&
            response.data.teamCheck &&
            response.data.ageCheck === 0 &&
            response.data.shirtNumberCheck === 0 &&
            response.data.leagueCheck;

          if (val) {
            alert("Congrats");
            dispatch(clearGuessAction());
            startNewGameSession()
              .then((response) =>
                dispatch(newGameSessionAction(response.data.id))
              )
              .catch((e) => {});
          }
          inputRef.current.value = "";
        }
      })
      .catch((e) => {
        if(e.response.status === 423){
          const playerInfo = e.response.data.info;
          const message = `Game Over! \nPlayer was ${playerInfo.name}(${playerInfo.position}) from ${playerInfo.team} and ${playerInfo.nationality} !!!`
           alert(message);
           dispatch(clearGuessAction());
           startNewGameSession()
             .then((response) =>
               dispatch(newGameSessionAction(response.data.id))
             )
             .catch((e) => {});
        }
      });
  };

  return (
    <div className="main__area__container">
      <DatalistInput
        ref={inputRef}
        className="main__area__input"
        placeholder="Player name"
        onChange={onGuessTextChange}
        onSelect={onGuessSelect}
        items={autoCompleteOptions.map((autoCompleteItem) => ({
          ...autoCompleteItem,
          node: (
            <PlayerAutoComplete
              key={autoCompleteItem.value}
              {...autoCompleteItem}
            />
          ),
        }))}
      />
    </div>
  );
};

export default MainArea;
