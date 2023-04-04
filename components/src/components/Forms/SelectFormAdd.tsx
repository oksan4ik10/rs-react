import React from 'react';
import type { FieldError } from 'react-hook-form';
import { OptionsHook } from './OptionsHook';

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type ComponentSelectProps = {
  register: SelectProps;
  errors: FieldError | undefined;
  className: string;
  type?: string;
  classNameError?: string;
  classNameSelect: string;
};

export const SelectFormAdd = (props: React.PropsWithChildren<ComponentSelectProps>) => {
  const { register, errors, className, classNameError, classNameSelect } = props;
  const name = register.name ? register.name : '';
  const role = 'error' + name[0].toUpperCase() + name?.slice(1);

  return (
    <>
      <label className={className}>
        <span>
          {typeof props.children === 'string' &&
            props.children.replace(/(^|\s)\S/g, function (a) {
              return a.toUpperCase();
            })}
        </span>
        <select className={classNameSelect} {...register} name={name} role={name}>
          <OptionsHook />
        </select>

        {errors && (
          <span className={classNameError} role={role}>
            {errors.message}
          </span>
        )}
      </label>
    </>
  );
};
