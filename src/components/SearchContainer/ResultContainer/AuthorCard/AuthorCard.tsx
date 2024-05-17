import React from "react";
import * as AuthorSpecificsTypes from "../../../../types/authorDataType";
import { useDispatch } from "react-redux";
import { useFavorite } from "../../../../hooks/useFavorite";
interface AuthorCardProps {
  item: AuthorSpecificsTypes.Doc;
  inputType: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ item, inputType }) => {
  const handleFavorite = (input: string) => {
    console.log("hej");
    console.log(item.name);
    useFavorite(input, dispatch, inputType, item.name);
  };
  const dispatch = useDispatch();
  return (
    <div className="border w-full bg-white rounded-md text-black">
      <h2>{item.name}</h2>
      <h3>Top work: {item.top_work}</h3>
      <div>
        <div>
          {item.top_subjects && <div>Top subjects:</div>}
          {item.top_subjects &&
            item.top_subjects.map((subject: string, index: number) => (
              <p key={index}> {subject}</p>
            ))}
        </div>
      </div>
      <p>Amount of works written: {item.work_count}</p>
      {item.birth_date && <p>DOB: {item.birth_date}</p>}
      {item.death_date && <p>Death: {item.death_date}</p>}
      <button
        className="text-white w-full bg-indigo-600"
        onClick={() => handleFavorite("author")}
      >
        Favorite this author
      </button>
    </div>
  );
};

export default AuthorCard;
