const exchangeForToken = async (code) => {
  console.log(code);
  return 'MOCK TOKEN FOR CODE';
};

const getGithubProfile = async (token) => {
  console.log(token);
  return {
    login: 'fake_github_user',
    email: 'not-real@example.com',
    avatar_url: 'https://www.placecage.com/gif/300/300',
  };
};

module.exports = { exchangeForToken, getGithubProfile };
