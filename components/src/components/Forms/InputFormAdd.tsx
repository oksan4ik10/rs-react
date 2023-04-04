import React from 'react';
import type { FieldError } from 'react-hook-form';

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
  const name = register.name ? register.name : '';
  const role = 'error' + name[0].toUpperCase() + name?.slice(1);

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
          <span className={classNameError} role={role}>
            {errors.message}
          </span>
        )}
      </label>
    </>
  );
};
