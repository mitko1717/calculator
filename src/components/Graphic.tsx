import { FC } from "react";
import { useActions } from "../hooks/actions";
import { IArticle } from "../models/interfaces";

export type ArticleCardProps = {
  art: IArticle;
  query: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ }) => {
  const { setArticle } = useActions();

  return (
    <div className="">
 
    </div>
  );
};

export default ArticleCard;
