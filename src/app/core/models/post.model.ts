class PostModel {
  constructor(
    public topic_id: string,
    public author: string,
    public post_text: string,
    public datetime?: string, // datetime is added by the server
    public _id?: string // _id is present if editing or returning from DB
  ) { }
}

export { PostModel };
