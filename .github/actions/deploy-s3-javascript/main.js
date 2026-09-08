import * as core from "@actions/core";
// import * as github from "@actions/github";
import * as exec from "@actions/exec";

function run() {
    const bucket = core.getInput("bucket", { required: true });
    const bucketRegion = core.getInput("bucket-region", { required: true });
    const distFolder = core.getInput("dist-folder", { required: true });

    const s3URI = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3URI} --region ${bucketRegion}`);

    core.notice("Hello from my custom JavaScript action!");
}

run();
