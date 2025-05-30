const Form = ({ printValueSelect, printValue }) => {
  let Values = [];
  const checkItem = (e) => {
    let result = Values.find((item) => item === e.target.value);
    if (result) {
      Values = Values.filter((item) => item !== e.target.value);
    } else {
      Values.push(e.target.value);
    }
    console.log(Values);
  };

  return (
    <div className="mt-3 w-1/3 p-3 rounded-2xl bg-cyan-800 mx-auto">
      {/* text */}
      <label
        htmlFor="first-name"
        className="w-max mx-auto block text-[20px] text-emerald-200 cursor-pointer"
      >
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        className="w-[300px] h-[40px] border-2 block rounded-lg bg-rose-400 mx-auto my-2 px-2 capitalize border-rose-900"
        onChange={(e) => printValue(e)}
      />
      <label
        htmlFor="last-name"
        className="w-max mx-auto block text-[20px] text-emerald-200 cursor-pointer"
      >
        Last Name
      </label>
      <input
        type="text"
        id="last-name"
        className="w-[300px] h-[40px] border-2 block rounded-lg bg-rose-400 mx-auto my-2 px-2 capitalize border-rose-900"
        onChange={(e) => printValue(e)}
      />
      {/* text */}
      {/* select */}
      <label
        htmlFor="country"
        className="w-max mx-auto block text-[20px] text-emerald-200 cursor-pointer"
      >
        Country
      </label>
      <select
        id="country"
        className="w-[300px] h-[100px] border-2 block rounded-lg bg-rose-400 mx-auto my-2 px-2 capitalize border-rose-900"
        onChange={(e) => printValueSelect(e)}
        multiple
      >
        <option value="select your fave country" disabled>
          select your favorite country
        </option>
        <option value="Iran">Iran</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      {/* select */}
      {/* checkbox */}
      <label
        htmlFor="tv"
        className="mx-[10px] inline-block text-[20px] text-emerald-200 cursor-pointer"
      >
        tv
      </label>
      <input
        type="checkbox"
        id="tv"
        value="tv"
        onChange={(e) => checkItem(e)}
      />
      <label
        htmlFor="Telegram"
        className="mx-[10px] inline-block text-[20px] text-emerald-200 cursor-pointer"
      >
        Telegram
      </label>
      <input
        type="checkbox"
        id="Telegram"
        value="Telegram"
        onChange={(e) => checkItem(e)}
      />
      {/* checkbox */}
    </div>
  );
};

export default Form;
