import { useState } from 'react';
import Decoration from "../../assets/Decoration.svg"
import data from "../../database/data";

const FoundationsAndOrganizations = () => {

    const [items,setItems] = useState(data.fund.items);
    const [title,setTitle] = useState(data.fund.description);
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }

    const handleClickFund = () => {
        setItems(data.fund.items);
        setTitle(data.fund.description);
        setCurrentPage(1);
    }
    const handleClickOrg = () => {
        setItems(data.organizations.items);
        setTitle(data.organizations.description);
        setCurrentPage(1);
    }
    const handleClickLocal = () => {
        setItems(data.local.items);
        setTitle(data.local.description);
        setCurrentPage(1);
    }

    const renderTodos = currentTodos.map((item, index) => {
        return (
            <li
                key={index}
                className="peopleWeHelp-li"
            >
                <div className="peopleWeHelp-content--items">
                    <div
                        className="content-text"
                    >
                        <p
                            className="content-text--title"
                        >
                            {item.title}
                        </p>
                        <p
                            className="content-text--subtitle"
                        >
                            {item.subtitle}
                        </p>
                    </div>
                    <p
                        className="content-text--items"
                    >
                        {item.things}
                    </p>
                </div>
            </li>
        )
    });

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <div
                key={number}
                id={number}
                onClick={handleClick}
                className="peopleWeHelp-pagination"
            >
                {number}
            </div>
        );
    });

    return (
        <div className="peopleWeHelp-container">
            <div className="fundations-and--orgaznizations">
                <div className="peopleWeHelp-box--title">
                    <div className="peopleWeHelp-box--title---content">
                        Komu pomagamy ?
                    </div>
                    <img
                        src={Decoration}
                        alt="decoration sign"/>
                </div>
                <div className="peopleWeHelp-box--select">
                    <div
                        className="peopleWeHelp-box--select---box"
                        onClick={handleClickFund}
                    >
                        Fundacjom
                    </div>
                    <div
                        className="peopleWeHelp-box--select---box"
                        onClick={handleClickOrg}
                    >
                        <p>Organizacjom</p>
                        <p>pozarządowym</p>
                    </div>
                    <div
                        className="peopleWeHelp-box--select---box"
                        onClick={handleClickLocal}
                    >
                        <p>Lokalnym</p>
                        <p>zbiórkom</p>
                    </div>
                </div>
                <div className="peopleWeHelp-box--content">
                    <div className="peopleWeHelp-box--content---title">
                        {title}
                    </div>
                    {renderTodos}
                    {
                        pageNumbers.length === 1 ?
                            ""
                            :
                            <div
                                className="peopleWeHelp-box--content---paginationBox"
                                id="page-numbers">
                                {renderPageNumbers}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoundationsAndOrganizations;