import CardComponent01 from "../_components/CardComponent01";

export default function Home() {
  return (
    <main className="flex">
      <CardComponent01
        src={
          "https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7t-Y5h1pPzQ6~trCDXoo92yuv5-rsGnsVKvTEwBjqTTWgiz3IqxD28GsmM5K6hzPZcWnXrojgFAXjHXvQHYgTBkVBA28kl0HzWX5DmcBGFSapwqkvyIPQc1AWlVTSY~AFqReHgoMOpm2yqiBkO-M6OtP-MJFL3B1xZwRNHUkU~Na2mLvNieMpt-3RBbS-KBvgUu7NV1uChT8bHDufXg0l8SUtS3f7IIwUesxq7rDLWh-l0PuvLyxIReg-lGEC5gLqTPo9c08X1Aa14yDHIQDxtBrpCKHgQfk68bvcbiuYMZHNHnT6t6AcdkoJlaJZQDV5ReMqZQ9ASGedc88b2LdQ__"
        }
        title="Book"
        description="View All Available Books"
        link="/book"
      />
      <CardComponent01
        src={
          "https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HtiEYeNI1w7G5mddD4bdfyHiLPkOLtw0~nbdX-FJiLMWRpukSqklaVKMc8noRAr0UgaTz0DV02B0S8TtbpZgUXI4Rui3X-ObULjLcnMOkmPKMiePdd1S9~DRcLQmKNpgQQXimNNowRaercCmvLIUamrGP0Q4YJ-~c~7AmLdjkAByV9wakWLI05gzKBQmG9rSSudFJJFTCaO7Flm9Bhd4XAcMWWHyRJ9CDqZhJK1DBkBhBYjnZNXz43Nkrr1pWDYx~EejzD427Qk76CfVuH9WusFTVsPIQEo7wd-6zGFHh8mztYe8bsMva6ybPfbAxUVtLczYngPQSRhBtxvcnEzVfg__"
        }
        title="Cartoons"
        description="View All Available Categories"
        link="cartoon"
      />
    </main>
  );
}
