# report-lerna

not published yet, just clone the repo and run `npm link` in the root of the package

```bash
# npm install -g report-lerna-hoist-versions
git clone git@github.com:RpprRoger/report-lerna.git
cd report-lerna
npm link

# from the root of a lerna repo
report-lerna
> Missmatch in some-react-package.dependencies. react@16.3.2 -> react@16.4.0
> Missmatch in some-react-package.dependencies. react-dom@16.3.2 -> react-dom@16.4.0
> Missmatch in some-react-package.devDependencies. dotenv@5.0.1 -> dotenv@6.0.0
> Missmatch in some-react-package.devDependencies. react-test-renderer@16.3.2 -> react-test-renderer@16.4.0
```
