import React from 'react';
import {Link} from 'react-router-dom';

const BookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name + " " + props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                {/*<a title={"Edit"} className={"btn btn-info ml-2"}*/}
                {/*   onClick={() => props.onEdit(props.term.id)} href="/books/edit/${props.term.id}">*/}
                {/*    Edit*/}
                {/*</a>*/}
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Mark as Taken"} className={"btn btn-danger ml-2"}
                   onClick={() => props.onBookTaken(props.term.id)}>
                    Mark as Taken
                </a>
                {/*<Link className={"btn btn-danger ml-2"}*/}
                {/*      onClick={() => props.onBookTaken(props.term.id)}>*/}
                {/*    Mark book as taken*/}
                {/*</Link>*/}
            </td>
        </tr>
    )
}

export default BookTerm;