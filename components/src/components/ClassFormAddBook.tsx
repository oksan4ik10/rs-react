import React, { FormEvent, RefObject } from 'react';
import { ClassOptions } from './ClassOptions';
import { IMyStatelikes } from '../types/types';

export class ClassFormAddBook extends React.Component {
  title: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
  selectRef: RefObject<HTMLSelectElement>;
  radioRefHorror: RefObject<HTMLInputElement>;
  radioRefFantasy: RefObject<HTMLInputElement>;
  radioRefDetective: RefObject<HTMLInputElement>;
  radioRefOther: RefObject<HTMLInputElement>;
  check: RefObject<HTMLInputElement>;
  fileInput: RefObject<HTMLInputElement>;
  desc: RefObject<HTMLTextAreaElement>;
  images: string[];
  state: IMyStatelikes;
  constructor(props: Record<string, never>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef();
    this.desc = React.createRef();
    this.year = React.createRef();
    this.selectRef = React.createRef();
    this.radioRefHorror = React.createRef();
    this.radioRefFantasy = React.createRef();
    this.radioRefDetective = React.createRef();
    this.radioRefOther = React.createRef();
    this.check = React.createRef();

    this.fileInput = React.createRef();
    this.images = [];

    this.state = {
      date: '',
      count: 10,
    };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(this.desc.current?.value);
    const radio = this.radioRefDetective.current?.checked
      ? this.radioRefDetective.current.value
      : this.radioRefFantasy.current?.checked
      ? this.radioRefFantasy.current.value
      : this.radioRefHorror.current?.checked
      ? this.radioRefHorror.current.value
      : this.radioRefOther.current?.value;
    console.log(radio);
    const check = this.check.current?.checked;
    if (this.fileInput.current) {
      if (this.fileInput.current.files) {
        const selecteds = this.fileInput.current.files[0];
        this.images.push(URL.createObjectURL(selecteds));
        this.setState({ date: this.images[0] });
      }
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" ref={this.title} />
          </label>
          <label>
            Desc:
            <textarea ref={this.desc} />
          </label>
          <label>
            Year:
            <input type="date" ref={this.year} />
          </label>
          <span>Author</span>
          <select ref={this.selectRef}>
            <ClassOptions />
          </select>
          <h4>Genre</h4>
          <p>
            <label>
              Horror
              <input type="radio" ref={this.radioRefHorror} name="radio" value="Horror" />
            </label>
            <label>
              Fantasy
              <input type="radio" ref={this.radioRefFantasy} name="radio" value="Fantasy" />
            </label>
            <label>
              Detective
              <input type="radio" ref={this.radioRefDetective} name="radio" value="Detective" />
            </label>
            <label>
              Other
              <input
                defaultChecked
                type="radio"
                ref={this.radioRefOther}
                name="radio"
                value="Other"
              />
            </label>
          </p>

          <p>
            Like
            <input type="checkbox" ref={this.check} />
          </p>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} accept="image/*" />
          </label>

          <input type="submit" value="Create card" />
        </form>
        <img src={this.state.date} style={{ width: 300 }} />
      </>
    );
  }
}
