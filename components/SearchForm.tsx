import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className="search-form relative">
      <input
        type="text"
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Project"
      />
      <div className="flex gap-2">
        {false && <div>Reset</div>}
        <button type="submit" className="search-btn text-white">
          <Search className="sixe-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
