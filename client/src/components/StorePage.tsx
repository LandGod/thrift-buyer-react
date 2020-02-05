import React, { Component } from "react";

type StorePageProps = {
  storeName: string;
};

export class StorePage extends Component<StorePageProps> {
  state = {};

  render() {
    return (
      <div className="container">
        {/* Store name */}
        <div className="row">
          <div className="col-12">
            <h1>{this.props.storeName}</h1>
          </div>
        </div>
        {/* ------------------ */}

        {/* Address */}
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Located at</h3>
            <p>
              <a
                className="text-secondary"
                href="https://www.google.com/maps/place/{{googleStoreAddress}}"
                target="__blank"
              >
                {address}
              </a>
            </p>
          </div>
        </div>
        {/*  ----------------------  */}

        {/* Categories */}
        <div className="row">
          <div className="col-12">
            {/* Category Buttons */}
            <div className="row">
              <div className="col-12">
                <ul>
                  {/* {{#each categories}}
                    <li className="d-inline-block">
                        <button className="btn categoryTitleButton {{this}}Button">{{this}}</button>
                    </li>
                    {{/each}} */}
                  <li className="d-inline-block">
                    <button
                      id="addCategoryButton"
                      type="button"
                      className="btn btn-secondary"
                      data-container="body"
                      data-toggle="popover"
                      data-trigger="focus"
                      data-placement="bottom"
                    >
                      +
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category Data */}
            <div className="row">
              {/* Ratings */}
              <div className="col-12 col-md-3" id="ratingsColumn">
                <table className="ratingsTable">
                  <tbody>
                    <tr className="qualityRatingStars">
                      <td>Quality</td>
                      <td>
                        <div className="stars-outer">
                          <div className="stars-inner"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="quantityRatingStars">
                      <td>Quantity</td>
                      <td>
                        <div className="stars-outer">
                          <div className="stars-inner"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="priceRatingStars">
                      <td>Price</td>
                      <td>
                        <div className="stars-outer">
                          <div className="stars-inner"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Personal Notes */}

              <div
                className="col-12 col-md-9  border border-secondary"
                id="personalNotesColumn"
              >
                <div className="row" id="NotesTitle">
                  <h4>My Notes</h4>
                </div>
                <div className="row" id="personalRatingsRow">
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 personalRating"
                    id="personalQualityRating"
                  >
                    <h6>Quality:</h6>
                    {/* <button className="personalRatingButton btn btn-sm" currentRating="false"
                                ratingType="quality" id="qualityRate0" value='0'>x</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quality" id="qualityRate1" value="1">1</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quality" id="qualityRate2" value="2">2</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quality" id="qualityRate3" value="3">3</button></h6> */}
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 personalRating"
                    id="personalQuantityRating"
                  >
                    <h6>Quantity: </h6>
                    {/* <button className="personalRatingButton btn btn-sm" currentRating="false"
                                ratingType="quantity" id="quantityRate0" value='0'>x</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quantity" id="quantityRate1" value="1">1</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quantity" id="quantityRate2" value="2">2</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="quantity" id="quantityRate3" value="3">3</button></h6> */}
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 personalRating"
                    id="personalPriceRating"
                  >
                    <h6>Price:</h6>
                    {/* <button className="personalRatingButton btn btn-sm" currentRating="false" ratingType="price"
                                id="priceRate0" value='0'>x</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="price" id="priceRate1" value="1">1</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="price" id="priceRate2" value="2">2</button>
                            <button className="personalRatingButton btn btn-sm btn-light" currentRating="false"
                                ratingType="price" id="priceRate3" value="3">3</button></h6> */}
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="form-group col-12">
                    <textarea
                      className="form-control"
                      id="NoteTextArea"
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-right">
                  <div className="col-3">
                    <button
                      className="btn btn-success mb-3"
                      id="saveButton"
                      disabled
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------ */}
          </div>
        </div>

        {/* Category Row? */}
        <div className="row">
          <hr />
        </div>

        {/* Tags */}
        <div className="row">
          <div className="col-12">
            <p>
              {" "}
              <span className="h5">Tags: </span>
              <span id="tagsGoHere"></span>
              <button
                id="addTagButon"
                className="btn btn-sm btn-secondary"
                disabled
              >
                +
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StorePage;
