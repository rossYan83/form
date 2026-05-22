import { Component } from "react";

class Filter extends Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { value } = this.props;

    return (
      <label className="field filter-field">
        <span className="label-text">Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Search…"
        />
      </label>
    );
  }
}

export default Filter;
