<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <div class="about-title">
        <img alt="Vue title" class="title-logo" src="@/assets/images/logo-vector.png" width="125" height="125" />
        <h1>Patient Revue</h1>
      </div>
      <hr />
      <div class="about-content-wrapper">
        <div class="about-content">
          About...
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-wrapper {
    left: 50%;
    position: absolute;
    top: 5rem;
}

.page-wrapper .content-wrapper {
    margin-top: 1rem;
    transform: translate(-50%, 0);
}

.about-title {
    align-items: center;
    display: flex;
    width: 50rem;
}

.about-title .title-logo {
    height: 2.8rem;
    vertical-align: middle;
    width: 10.6rem;
}

h1 {
    font-size: 3rem;
    margin-left: 1rem;
    margin-bottom: .35rem;
}

.about-content-wrapper {
    display: flex;
    justify-content: center;
}

.about-content {
  display: block;
  width: 100%;
}
</style>
