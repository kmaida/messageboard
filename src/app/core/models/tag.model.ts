class TagModel {
  constructor(
    public tag: string,
    public slug: string,
    public _id?: string // _id is present if editing or returning from DB
  ) { }
}

export { TagModel };
