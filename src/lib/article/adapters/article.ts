import type { Article, Comment } from '@lib/article/types'

interface CommentData {
  Comment: {
    id: string
    articleId: string
    content: string
    authorId: string
  }
  User: {
    id: string
    name: string
    email: string
    role: string
    confirmed: boolean
    avatar?: string
  }
}

interface UserData {
  id: string
  name: string
  email: string
  role: string
  confirmed: boolean
  avatar?: string
}
interface ArticleData {
  id: string
  title: string
  content: string
  authorId: string
}

interface ArticleMapperData {
  Article: ArticleData
  User: UserData
  Comments?: CommentData[]
}

class ArticleAdapter {
  static map(data: ArticleMapperData): Article {
    return {
      id: data.Article.id,
      title: data.Article.title,
      content: data.Article.content,
      authorId: data.Article.authorId,
      author: {
        id: data.User.id,
        name: data.User.name,
        email: data.User.email,
        role: data.User.role,
        confirmed: data.User.confirmed,
        avatar: data.User.avatar,
      },
      comments: data.Comments?.map((comment) => this.mapComment(comment)),
    }
  }

  static mapArray(data: ArticleMapperData[]): Article[] {
    return data.map((item) => this.map(item))
  }

  static mapComment(data: CommentData): Comment {
    return {
      id: data.Comment.id,
      articleId: data.Comment.articleId,
      content: data.Comment.content,
      authorId: data.Comment.authorId,
      author: {
        id: data.User.id,
        name: data.User.name,
        email: data.User.email,
        role: data.User.role,
        confirmed: data.User.confirmed,
        avatar: data.User.avatar,
      },
    }
  }
}

export default ArticleAdapter
