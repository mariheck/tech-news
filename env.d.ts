declare namespace NodeJS {
  interface ProcessEnv {
    BUILD_TIME: string;
    GITHUB_REPO_URL?: string;
  }
}
