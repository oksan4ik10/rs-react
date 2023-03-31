import { useRef, useState } from 'react';
import { Field, useForm } from 'react-hook-form';
import classes from '../styles/ClassFormAddBook.module.css';
import { InputFormAdd } from './Forms/InputFormAdd';
import { SelectFormAdd } from './Forms/SelectFormAdd';

import { CardsBooksHook } from './CardsBooksHook';

import { IObjDate, IOneBook } from 'types/types';
export interface IDateForm {
  title: string;
  checkbox: true;
  desc: string;
  year: string;
  file: FileList;
  author: string;
  check: string[];
  radio: string[];
}
export const FormAddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDateForm>();

  const [books, setBooks] = useState<IObjDate>({});
  const [createBook, setCreateBook] = useState('');

  const regCheck = register('check', {
    required: 'Please select at least one genre',
  });

  const regRadio = register('radio', {
    required: 'Please select Yes/No',
  });

  function onSubmit(date: IDateForm) {
    let selecteds: File;
    if (date.file && date.file[0]) {
      selecteds = date.file[0];
      const numYear = Number(date.year.split('-')[0]);
      const newBook: IOneBook = {
        author: date.author,
        desc: date.desc,
        title: date.title,
        genre: date.check.join(', '),
        year: numYear,
        img: URL.createObjectURL(selecteds),
        check: date.radio ? true : false,
      };
      if (books.books) {
        books.books.push(newBook);
      } else {
        books['books'] = [newBook];
      }
      setBooks(books);
      reset();
      setCreateBook('Book created!');
      setTimeout(() => setCreateBook(''), 3000);
    } else return;
  }

  return (
    <>
      <form className={classes.forms} onSubmit={handleSubmit(onSubmit)}>
        <InputFormAdd
          register={register('title', {
            required: 'Title field is empty',
            minLength: { value: 3, message: 'Length title < 3' },
            pattern: {
              value: /^[A-Z]/,
              message: 'Title must start with a capital letter',
            },
          })}
          errors={errors.title}
          className={classes.label}
          classNameError={classes.error}
        >
          title
        </InputFormAdd>
        <InputFormAdd
          register={register('desc', {
            required: 'Desc field is empty',
            minLength: { value: 5, message: 'Length desc < 5' },
            pattern: {
              value: /^[A-Z]/,
              message: 'Desc must start with a capital letter',
            },
          })}
          errors={errors.desc}
          className={classes.label}
          classNameError={classes.error}
        >
          Desc
        </InputFormAdd>
        <InputFormAdd
          register={register('year', {
            required: 'Year field is empty',
            validate: {
              positive: (v: string | undefined) => {
                if (v) {
                  const numYear = Number(v.split('-')[0]);
                  const yearNow = new Date().getFullYear();
                  if (numYear > yearNow) return 'Year selected incorrectly';
                }
                return true;
              },
            },
          })}
          type="date"
          errors={errors.year}
          className={classes.label}
          classNameError={classes.error}
        >
          Year
        </InputFormAdd>

        <SelectFormAdd
          register={register('author', {
            validate: {
              positive: (v: string | undefined) => {
                if (v === 'Change author') return 'Choose an author';

                return true;
              },
            },
          })}
          type="date"
          errors={errors.author}
          className={classes.label}
          classNameSelect={classes.select}
          classNameError={classes.error}
        >
          Author
        </SelectFormAdd>

        <div className={classes.label}>
          Genre
          <div className={classes.checkbox}>
            <InputFormAdd
              register={regCheck}
              errors={undefined}
              type="checkbox"
              className={classes.label}
              classNameInput={classes.custom}
              value="Horror"
            >
              Horror
            </InputFormAdd>
            <InputFormAdd
              register={regCheck}
              errors={undefined}
              type="checkbox"
              className={classes.label}
              classNameInput={classes.custom}
              value="Detective"
            >
              Detective
            </InputFormAdd>
            <InputFormAdd
              register={regCheck}
              errors={undefined}
              type="checkbox"
              className={classes.label}
              classNameInput={classes.custom}
              value="Fantasy"
            >
              Fantasy
            </InputFormAdd>
            <InputFormAdd
              register={regCheck}
              errors={undefined}
              type="checkbox"
              className={classes.label}
              classNameInput={classes.custom}
              value="Other"
            >
              Other
            </InputFormAdd>
          </div>
          <span className={classes.error} role="errorGenre">
            {errors.check?.message}
          </span>
        </div>

        <div className={classes.label}>
          Like
          <div className={classes.radio}>
            <InputFormAdd
              register={regRadio}
              errors={undefined}
              type="radio"
              className=""
              value="Yes"
            >
              Yes
            </InputFormAdd>
            <InputFormAdd register={regRadio} errors={undefined} type="radio" className="" value="">
              No
            </InputFormAdd>
          </div>
          <span className={classes.error} role="errorLike">
            {errors.radio?.message}
          </span>
        </div>

        <InputFormAdd
          register={register('file', {
            required: 'File not selected',
            validate: {
              positive: (v: FileList | undefined) => {
                if (v) {
                  const selecteds = v[0];
                  const arrValue = selecteds.name.split('.');
                  const exp = arrValue[arrValue.length - 1].toLocaleLowerCase();
                  if (selecteds && selecteds.size > 5 * 1024 * 1024)
                    return 'The file must be no larger than 5 MB';
                  if (
                    exp === 'png' ||
                    exp === 'jpg' ||
                    exp === 'jpeg' ||
                    exp === 'svg' ||
                    exp === 'gif'
                  ) {
                    return true;
                  } else {
                    return 'Extension is not .jpg, .png, .gif, .svg';
                  }
                }
                return true;
              },
            },
          })}
          type="file"
          accept="image/*"
          errors={errors.file}
          className={classes.label}
          classNameError={classes.error}
        >
          Upload
        </InputFormAdd>

        <input type="submit" value="Create card" />
      </form>
      <h3 className={classes.title}>{createBook}</h3>
      <CardsBooksHook {...books} />
    </>
  );
};
