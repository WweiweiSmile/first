<template>
  <div id="shopTable">
    <table>
      <thead>
        <th>ID</th>
        <th>书名</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </thead>
      <tr v-for="(item,index) in zhi" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>

        <td>
          <button @click="unadd(index)">-</button>
          {{item.num}}
          <button @click="add(index)">+</button>
        </td>

        <td>
          <button @click="remove(index)">移出</button>
        </td>
      </tr>
    </table>
    <h2>总的价格:{{sumPrice}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zhi: [
        {
          id: 1,
          name: "books1",
          price: 11,
          num: 1
        },
        {
          id: 2,
          name: "books2",
          price: 22,
          num: 1
        },
        {
          id: 3,
          name: "books3",
          price: 33,
          num: 1
        },
        {
          id: 4,
          name: "books4",
          price: 44,
          num: 1
        }
      ],
      unadd(index) {
        if (this.zhi[index].num > 1) {
          this.zhi[index].num--;
        }
        console.log(index);
      },
      add(index) {
        this.zhi[index].num++;
        console.log(index);
      },
      remove(index) {
        this.zhi.splice(index, 1);
      }
    };
  },
  created() {
    console.log(this.zhi);
  },
  computed: {
    sumPrice() {
      let sum = 0;
      for (let i of this.zhi) {
        console.log(i);
        sum += i.price * i.num;
      }
      return sum;
    }
  }
};
</script>