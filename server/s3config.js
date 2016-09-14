// the config for the s3 instance
// S3.config = {
//     key: Meteor.settings.AWSAccessKeyId,
//     secret: Meteor.settings.AWSSecretAccessKey,
//     bucket: Meteor.settings.S3BucketName,
//     region: Meteor.settings.S3BucketRegion,
// };

if (Meteor.settings.AWS) {
  AWS.config.update({
    accessKeyId: Meteor.settings.AWS.accessKeyId,
    secretAccessKey: Meteor.settings.AWS.secretAccessKey
  });
} else {
  console.warn("AWS settings missing");
}

var s3 = new AWS.S3();

var list = s3.listObjectsSync({
  Bucket: Meteor.settings.AWS.s3BucketName,
  Prefix: 'subdirectory/'
});

var ref = list.Contents;
for (i = 0, len = ref.length; i < len; i++) {
  file = ref[i];
  console;
}
