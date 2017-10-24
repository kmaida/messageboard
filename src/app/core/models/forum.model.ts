class ForumModel {
  constructor(
    public title: string,
    public _id?: string // _id is present if editing or returning from DB
  ) { }
}

export { ForumModel };
