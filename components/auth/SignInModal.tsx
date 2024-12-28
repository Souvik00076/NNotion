"use client";
import { SignIn } from "@clerk/nextjs";
import { CommonModal } from "../shared";
type SignInModalProps = { type: "page" | "modal" };
export const SignInModal = ({ type = "modal" }: SignInModalProps) => {
  const child = (
    <div className="min-w-[400px] min-h-[400px]">
      <SignIn forceRedirectUrl={"/"} />
    </div>
  );

  return type === "modal" ? (
    <CommonModal onClose={() => {}}>{child}</CommonModal>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {child}
    </div>
  );
};
