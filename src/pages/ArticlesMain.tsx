import { ChangeEvent, useCallback, useState } from "react";
import { useGetArticlesQuery } from "../store/articles/articles.api";
import { IArticle } from "../models/interfaces";

const ArticlesMain = () => {
  const { isLoading, isError, data } = useGetArticlesQuery(51);

  return (
    <div className="flex flex-col pt-10 h-screen w-screen gap-6 max-w-[1250px] mx-auto">
     
    </div>
  );
};

export default ArticlesMain;
