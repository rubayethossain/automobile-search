import Button from "components/Button";
import { useCarDetails } from "hooks";
import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { paths } from "Router";
import { useDispatch } from "react-redux";
import { deleteCar } from "dataStore/cars/cars.actions";
import CommentForm from "./CommentForm";

function CarDetails(props) {
  const { params } = useRouteMatch();
  const [carDetails, refetchCarDetails] = useCarDetails(params.car_id);
  const dispatch = useDispatch();
  const history = useHistory();

  const { title, price, image, comments } = carDetails;

  const commentsList = () => {
    if (comments.length) {
      return comments.map((com, key) => (
        <div key={key} className="mb-2">
          <p>{com.msg}</p>
          <p>
            <em>{com.author}</em>
          </p>
        </div>
      ));
    } else {
      return <p>No Review Available</p>;
    }
  };

  const deleteAuto = () => {
    dispatch(deleteCar(params.car_id));
    history.push(paths.SEARCH);
  };

  return (
    <section className="mt-3">
      <div className="columns">
        <div className="column">
          <h1 className="is-size-2">{title}</h1>
          <h3 className="is-size-4 mb-4">
            <strong className="has-text-danger">{price}</strong>
          </h3>

          <Button className="mr-2 is-small is-warning">
            <Link
              to={`${paths.EDIT_CAR}${params.car_id}`}
              className="has-text-white"
            >
              Edit
            </Link>
          </Button>
          <Button className="is-small is-danger" onClick={deleteAuto}>
            Delete
          </Button>

          <h4 className="is-size-5 mt-5">Reviews</h4>
          <hr className="my-2" />
          {commentsList()}

          <h4 className="is-size-5 my-4">
            <u>Add Review</u>
          </h4>
          <CommentForm carId={params.car_id} onCommentAdd={refetchCarDetails} />
        </div>
        <div className="column">
          <figure className="image">
            <img src={image} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
