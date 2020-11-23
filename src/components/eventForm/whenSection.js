import React from "react";

export const WhenSection = ({ handleChange, inputValues, errors }) => {
  return (
    <div className="form-section">
      <h2 className="separator form-heading">When</h2>

      <div className="form-control">
        <label>starts on: *</label>
        <input
          className={`date-control ${errors.date ? "input-error" : null} `}
          type="date"
          name="date"
          onChange={handleChange}
        />
        <span className="text-separator">at</span>
        <input
          className={`time-control ${errors.date ? "input-error" : null} `}
          type="time"
          name="event_time"
          onChange={handleChange}
        />

        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div className="form-control">
        <label>duration:</label>
        <input
          className="sm-control"
          type="number"
          name="duration"
          min={1}
          placeholder="Number"
          onChange={handleChange}
          value={inputValues.duration}
        />
        <p className="text">hour</p>
      </div>
    </div>
  );
};
