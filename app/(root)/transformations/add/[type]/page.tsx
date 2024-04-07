import Header from "@/components/shared/header";
import { FC } from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/transformation-form";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationType: FC<SearchParamProps> = async ({
  params: { type },
}): Promise<JSX.Element> => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationType;
