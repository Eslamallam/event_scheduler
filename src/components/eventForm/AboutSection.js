import React from "react";
import { categories } from "../../data/categories";

export const AboutSection = ({
  handleChange,
  inputValues,
  errors,
  chars,
  maxChars,
}) => {
  return (
    <div className="form-section">
      <h2 className="separator form-heading">About</h2>

      <div className="form-control">
        <label>title: *</label>
        <input
          className={`control ${errors.title ? "input-error" : null}`}
          type="text"
          name="title"
          placeholder="Make it short and clear"
          onChange={handleChange}
          value={inputValues.title}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-control">
        <label>description: *</label>
        <div className="text-area-box">
          <textarea
            type="text"
            name="description"
            className={`control-area ${
              errors.description ? "input-error" : null
            }`}
            placeholder="write about your event, be creative"
            onChange={handleChange}
            value={inputValues.description}
            rows="10"
            maxLength={maxChars}
          ></textarea>
          <div className="text-counter">
            <p>Max characters allowed</p>
          </div>
          <div className="counter">
            <p>
              {chars.charsLeft}
              {`/${maxChars}`}
            </p>
          </div>
        </div>

        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </div>

      <div className="form-control">
        <label>category:</label>
        <select onChange={handleChange} name="category_id" className="control">
          <option value={""}>Select Category</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-control">
        <label>payment:</label>
        <div className="radio-group">
          <input
            className="radio-control"
            type="radio"
            name="event_type"
            onChange={handleChange}
            value="free"
          />
          Free event
          <input
            className="radio-control"
            type="radio"
            name="event_type"
            onChange={handleChange}
            value="paid"
          />
          Paid event
        </div>

        {inputValues && inputValues.event_type === "paid" ? (
          <div className="fee">
            <input
              className={`sm-control ${
                errors.event_fee ? "input-error" : null
              }`}
              type="number"
              name="event_fee"
              min={0}
              placeholder="Number"
              onChange={handleChange}
              value={inputValues.event_fee}
            />
            $
            {errors.event_fee && (
              <span className="error">{errors.event_fee}</span>
            )}
          </div>
        ) : null}
      </div>

      <div className="form-control">
        <label>reward:</label>
        <input
          className="sm-control"
          type="number"
          name="reward"
          min={0}
          placeholder="Number"
          onChange={handleChange}
          value={inputValues.reward}
        />
        <p className="text">reward points for attendance</p>
      </div>
    </div>
  );
};
