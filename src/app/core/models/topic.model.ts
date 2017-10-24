import { TagModel } from './tag.model';

class TopicModel {
  constructor(
    public title: string,
    public forum_id: string,
    public sticky?: boolean,
    public tags?: TagModel[],
    public _id?: string // _id is present if editing or returning from DB
  ) { }
}

export { TopicModel };
