import { useAppSelector } from "../hooks/redux";

const Article = () => {
  const { openedArticle } = useAppSelector((state) => state.article);

  return (
    <div className="flex w-full flex-col">

    </div>
  );
};

export default Article;
