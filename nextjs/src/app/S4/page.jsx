import Link from "next/link";

const S4 = async () => {
  return (
    <>
      <div className="mx-auto p-4 bg-amber-200 rounded-2xl w-1/4 flex flex-row">
        <ul>
          <li>
            <Link href={"S4/fetch-server-component"}>fetchServerComponent</Link>
          </li>
          <li>
            <Link href={"S4/daynamic-prefetching"}>DaynamicPrefetching</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default S4;
