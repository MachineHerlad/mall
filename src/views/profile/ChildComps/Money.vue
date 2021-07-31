<template>
  <div class="money">
    <div class="money-item">
      <p>
        0.00
      <span>元</span>
      </p>
      <p>我的余额</p>
    </div>
    <div class="money-item">
      <p>
        0
        <span>个</span>
      </p>
      <p>我的优惠</p>
    </div>
    <div class="money-item">
      <p>
        0
        <span>分</span>
      </p>
      <p>我的积分</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Money"
}
</script>

<style scoped>
.money {
  width: 100%;
  display: flex;
}

.money-item {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 85px;
}

.money-item:nth-of-type(1),
.money-item:nth-of-type(2) {
  border-right: 1px solid #eee;
}

.money-item p:first-child {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
  color: #ff5f3e;
}

.money .money-item p:first-child span {
  font-size: 14px;
  font-weight: normal;
  color: #666666;
}

.money .money-item p:last-child {
  font-size: 14px;
  color: #666666;
}
</style>
