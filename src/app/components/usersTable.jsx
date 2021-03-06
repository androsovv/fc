import React from "react";
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const UsersTable = ({users, onSort, selectedSort, ...rest}) => {
    const columns = {
        name: {
            iter: "name",
            name: "Имя"
        },
        qualities: {name: "Качества"},
        professions: {iter: "profession.name", name: "Профессия"},
        completedMeetings: {iter: "completedMeetings", name: "Встретился раз"},
        rate: {iter: "rate", name: "Oценка"},
        bookmark: {iter: "bookmark", name: "Избранное"},
        delete: {}
    };

    return (
        <table className="table">
            <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns}/>
            <tbody>
            {users.map((user) => (
                <User {...rest} {...user} key={user._id} />
            ))}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired
};

export default UsersTable;
