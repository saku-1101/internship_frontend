import { mount } from "@vue/test-utils";
import CheckBoxes from "@/components/CheckBoxes.vue";
import { Prefecture } from "@/service/models/pref.interface";

describe("CheckBoxes", () => {
  test("propsなし-Prefecture APIから取得前-初期テキストのみ表示", () => {
    const message = "都道府県";
    // テストケースのpropsを渡す
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [] as Prefecture[],
      },
    });

    expect(wrapper.find("h2").text()).toEqual(message);
  });
  test("propsあり-Prefecture APIから取得済み-チェックボックス表示", () => {
    // テストケースのpropsを渡す
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [{ prefCode: 0, prefName: "北海道" }] as Prefecture[],
      },
    });

    expect(wrapper.text()).toContain("北海道");
  });
  test("propsあり-都道府県をクリックしたとき-emitの値がクリックした値と等しいか", async() => {
    // テストケースのpropsを渡す
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [{ prefCode: 0, prefName: "北海道" }] as Prefecture[],
      },
    });
    // ボタンをクリック
    await wrapper.find("#checkbox").trigger("click");
    // 吐き出された値がtoEqual**と一致するか
    expect(wrapper.emitted("pref-clicked")).toEqual(
        [ [ 0, '北海道' ] ]);
  });
});