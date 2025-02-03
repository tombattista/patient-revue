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
          <h2>Repositories</h2>
          <dl>
            <dt><a href="https://github.com/tombattista/PatientReportApi.git" title="PatientReportApi GitHub repository">PatientReportApi C# API</a></dt>
            <dd>
              "PatientReportApi" is a C# .NET 8 API which provides an interface to patient report data to the UI.
              (<a href="https://github.com/tombattista/PatientReportApi/blob/main/README.md" title="PatientReportApi ReadMe">README</a>)
            </dd>
            <dt><a href="https://github.com/tombattista/patient-revue.git" title="patient-revue GitHub repository">patient-revue Vue application</a></dt>
            <dd>
              "patient-revue" is a Vue 3 application which displays patient report data either in a complete list or filtered by patient name.
              (<a href="https://github.com/tombattista/patient-revue/blob/main/README.md" title="patient-revue ReadMe">README</a>)
            </dd>
            <dt><a href="https://github.com/tombattista/svue-module.git" title="svue-module GitHub repository">svue-module Node application</a></dt>
            <dd>
              "svue-module" is a Node.js application which extends the functionality of Vue such that a developer can easily add components, interfaces, and models to a Vue project.
              (<a href="https://github.com/tombattista/svue-module/blob/main/README.md" title="svue-module ReadMe">README</a>)
            </dd>
          </dl>
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
  margin: 1rem;
  width: 100%;
}

dl > dt {
  background-color: var(--vt-c-gray-mute);
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: .25rem;
  padding: .25rem .5rem;
}

dl > dd {
  background-color: var(--vt-c-gray-mute);
  padding: 0 1rem;
}
</style>
