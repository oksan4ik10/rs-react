import React, { LegacyRef, ChangeEvent, FormEvent, RefObject, Children } from 'react';
import type { FieldError, DeepMap, FieldErrors, UseFormRegister } from 'react-hook-form';
import { IDateForm } from '../FormAddBook';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type ComponentProps = {
  register: InputProps;
  errors: FieldError | undefined;
  className: string;
  type?: string;
  defaultValue?: string;
  classNameError?: string;
  accept?: string;
  value?: string;
  classNameInput?: string;
};

export const InputFormAdd = (props: React.PropsWithChildren<ComponentProps>) => {
  const { register, errors, className, classNameError, type, accept, value, classNameInput } =
    props;
  const name = register.name;

  return (
    <>
      <label className={className}>
        {typeof props.children === 'string' &&
          props.children.replace(/(^|\s)\S/g, function (a) {
            return a.toUpperCase();
          })}
        <input
          {...register}
          type={type}
          name={name}
          role={name}
          accept={accept ? accept : ''}
          value={value}
          className={classNameInput}
        />

        {errors && (
          <span className={classNameError} role="errorTitle">
            {errors.message}
          </span>
        )}
      </label>
    </>
  );
};
