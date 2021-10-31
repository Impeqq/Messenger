import React from "react";
import { FormProvider, UseFormMethods, UseFormOptions } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type TProps = {
  onSubmit?(data: UseFormOptions["defaultValues"]): void;
  className?: string;
  formMethods: UseFormMethods;
};

export const BaseForm: React.FC<TProps> = ({
  children,
  onSubmit,
  className,
  formMethods,
}) => {
  const handleSubmit = (data: UseFormOptions["defaultValues"]) => {
    onSubmit && onSubmit(data);
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(handleSubmit)}
          className={className}
        >
          {children}
        </form>
      </FormProvider>
      {/* <DevTool control={formMethods.control} /> */}
    </>
  );
};
