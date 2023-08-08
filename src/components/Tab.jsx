import React from 'react';

const Tab = ({ value, title, isOpenTab, onTabOpen }) => {

    return (
        <>
        <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
            <a 
                className={
                    "block text-center border-b-2 text-xs font-bold uppercase px-5 md:px-14 py-4 w-[15rem] md:w-full " +
                    (isOpenTab
                        ? "text-gray-600  border-gray-800"
                        : "text-gray-400 border-gray-300")
                }
                onClick={onTabOpen}
                data-toggle="tab"
                href={"#link" + value}
                role="tablist"
            >
             {title}
            </a>
        </li>
        </>
    )
}


export default Tab;