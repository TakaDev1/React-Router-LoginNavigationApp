# React-Router-LoginNavigationApp

`useNavigate`を使って、ログイン後にDashboardページへプログラムで遷移するReact Routerアプリです。

## 目次

* [概要](#概要)
* [学習目標](#学習目標)
* [ページ構成](#ページ構成)
* [プロジェクト構成](#プロジェクト構成)
* [画面遷移](#画面遷移)
* [重要なポイント](#重要なポイント)
* [インストール](#インストール)
* [起動](#起動)
* [使用技術](#使用技術)

## 概要

ログイン画面に「ログイン」ボタンを配置し、クリックすると`/dashboard`へ移動します。

`useNavigate`を使ったプログラムによるページ遷移を学習します。

## 学習目標

* `useNavigate`の使い方
* ボタンクリックによるプログラムナビゲーション
* `navigate()`によるページ遷移
* `BrowserRouter` / `Routes` / `Route`の基本的な使い方
* ログイン後の画面遷移

## ページ構成

| ページ       | URL          | 説明           |
| --------- | ------------ | ------------ |
| Login     | `/`          | ログインボタンを表示   |
| Dashboard | `/dashboard` | ログイン後のページを表示 |

## プロジェクト構成

```text
src/
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
├── App.tsx
└── main.tsx
```

## 画面遷移

```text
Login (/)
   │
   │ ログイン
   ↓
Dashboard (/dashboard)
```

## 重要なポイント

### `useNavigate`

`useNavigate`は、イベント処理などからプログラムによってページ遷移を行うためのHookです。

```tsx
const navigate = useNavigate();

navigate("/dashboard");
```

今回のアプリでは、ログインボタンのクリックをきっかけにDashboardページへ遷移します。

## インストール

```bash
npm install react-router
```

## 起動

```bash
npm run dev
```

## 使用技術

* React
* TypeScript
* React Router
* Vite
