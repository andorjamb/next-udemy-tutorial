import Link from "next/link";
import { Suspense } from "react";
import paths from "@/paths";
import PostShow from "@/components/posts/post-show";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      Post Show Page
      <Suspense fallback={<div>Loading...</div>}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} />
      <CommentList
        /* fetchData={()=>fetchCommentByPostId(postId)} */ postId={postId}
      />
    </div>
  );
}
